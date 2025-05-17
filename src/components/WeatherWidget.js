import React, { useEffect, useState } from 'react';

// Brick, NJ coordinates
const LAT = 40.0228;
const LON = -74.1078;
// NOAA Tides & Currents station for Mantoloking, Barnegat Bay (Station ID: 8532591)
const NOAA_STATION_ID = '8532591';

const WeatherWidget = () => {
  const [weather, setWeather] = useState(null);
  const [wind, setWind] = useState(null);
  const [tide, setTide] = useState(null);
  const [wave, setWave] = useState(null);
  const [waterTemp, setWaterTemp] = useState(null);
  const [waveTrend, setWaveTrend] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [sun, setSun] = useState({ sunrise: null, sunset: null });

  useEffect(() => {
    // Fetch NWS weather
    const fetchWeather = async () => {
      try {
        // Get NWS gridpoint for Brick, NJ
        const pointsResp = await fetch(`https://api.weather.gov/points/${LAT},${LON}`);
        const pointsData = await pointsResp.json();
        const forecastUrl = pointsData.properties.forecast;
        const obsUrl = pointsData.properties.observationStations;

        // Get current conditions
        const obsStationsResp = await fetch(obsUrl);
        const obsStationsData = await obsStationsResp.json();
        const stationId = obsStationsData.features[0].properties.stationIdentifier;
        const latestObsResp = await fetch(`https://api.weather.gov/stations/${stationId}/observations/latest`);
        const latestObsData = await latestObsResp.json();
        setWeather({
          temp: latestObsData.properties.temperature.value,
          summary: latestObsData.properties.textDescription,
          icon: latestObsData.properties.icon,
        });
        setWind({
          speed: latestObsData.properties.windSpeed.value,
          direction: latestObsData.properties.windDirection.value,
        });
        setVisibility(latestObsData.properties.visibility.value); // in meters
      } catch (e) {
        setError('Weather data unavailable');
      }
    };

    // Fetch NOAA tide predictions
    const fetchTide = async () => {
      try {
        const now = new Date();
        const today = now.toISOString().slice(0, 10);
        const tomorrow = new Date(now.getTime() + 86400000).toISOString().slice(0, 10);
        // Get tide predictions (high/low) for today and tomorrow
        const tideResp = await fetch(`https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?station=${NOAA_STATION_ID}&product=predictions&datum=MLLW&units=english&time_zone=lst_ldt&format=json&interval=hilo&begin_date=${today.replace(/-/g, '')}&end_date=${tomorrow.replace(/-/g, '')}`);
        const tideData = await tideResp.json();
        // Find next high/low tide
        const nowTime = now.getHours() * 100 + now.getMinutes();
        const nextTide = tideData.predictions.find(pred => {
          const predTime = parseInt(pred.t.replace(/:/g, '').slice(8, 12));
          return predTime > nowTime;
        }) || tideData.predictions[0];
        setTide(nextTide);
      } catch (e) {
        setError('Tide data unavailable');
      }
      setLoading(false);
    };

    fetchWeather();
    fetchTide();

    // Sunrise/Sunset from NWS API
    const fetchSun = async () => {
      try {
        // Use sunrise-sunset.org API (no key, open) for precise times
        const resp = await fetch(`https://api.sunrise-sunset.org/json?lat=${LAT}&lng=${LON}&formatted=0`);
        const data = await resp.json();
        if (data.status === 'OK') {
          setSun({
            sunrise: data.results.sunrise,
            sunset: data.results.sunset,
          });
        }
      } catch (e) {
        setSun({ sunrise: null, sunset: null });
      }
    };
    fetchSun();

    // Fetch NOAA wave height (Barnegat Bay Buoy, Station 8532591, product: 'waveheight')
    const fetchWave = async () => {
      try {
        // NOAA NDBC station for wave data near Brick, NJ: Use 44065 (Shark River, ocean-side)
        const station = '44065';
        // Get recent observations (past 24h)
        const resp = await fetch(`https://www.ndbc.noaa.gov/data/realtime2/${station}.spec`);
        const text = await resp.text();
        // Parse the lines for wave height trend and water temp
        const lines = text.split('\n').filter(line => line && !line.startsWith('#'));
        if (lines.length > 1) {
          // Latest wave height
          const latest = lines[1].trim().split(/\s+/); // [YY MM DD hh mm WVHT SwH SwP WTP ...]
          const waveHeight = latest[6]; // WVHT in meters
          setWave({
            height_m: waveHeight,
            height_ft: (parseFloat(waveHeight) * 3.281).toFixed(1),
            station
          });
          // Water temp (WTP, 9th column)
          const waterTempC = latest[9];
          setWaterTemp(waterTempC !== undefined && waterTempC !== 'MM' ? `${waterTempC}°C / ${(parseFloat(waterTempC) * 9/5 + 32).toFixed(1)}°F` : null);
          // Wave trend: get next 6 hours
          const trend = [];
          for (let i = 1; i <= 6 && i < lines.length; i++) {
            const row = lines[i].trim().split(/\s+/);
            const hour = row[3];
            const wvht = row[6];
            trend.push({ hour, wvht });
          }
          setWaveTrend(trend.reverse()); // Chronological order
        }
      } catch (e) {
        setWave(null);
        setWaterTemp(null);
        setWaveTrend([]);
      }
      setLoading(false);
    };
    fetchWave();
  }, []);

  if (loading) return <div style={{padding: 16, background: 'rgba(255,255,255,0.85)', borderRadius: 12, maxWidth: 320, margin: '0 auto'}}>Loading weather...</div>;
  if (error) return <div style={{padding: 16, background: 'rgba(255,255,255,0.85)', borderRadius: 12, maxWidth: 320, margin: '0 auto'}}>Error: {error}</div>;

  return (
    <div style={{padding: 16, background: 'rgba(255,255,255,0.85)', borderRadius: 12, maxWidth: 360, margin: '0 auto'}}>
      <h3>Marine Weather & Surf (Brick, NJ)</h3>
      {weather && (
        <div style={{display: 'flex', alignItems: 'center', marginBottom: 8}}>
          {weather.icon && <img src={weather.icon} alt="icon" style={{width: 40, marginRight: 8}} />}
          <div>
            <strong>{weather.temp !== null ? `${Math.round(weather.temp)}°C / ${Math.round(weather.temp * 9/5 + 32)}°F` : 'N/A'}</strong><br />
            <span>{weather.summary}</span>
          </div>
        </div>
      )}
      {wind && (
        <div style={{marginBottom: 8}}>
          <span>Wind: <strong>{wind.speed !== null ? `${Math.round(wind.speed)} km/h` : 'N/A'}</strong> {wind.direction !== null ? `from ${wind.direction}°` : ''}</span>
        </div>
      )}
      {tide && (
        <div style={{marginBottom: 8}}>
          <span>Next tide: <strong>{tide.type === 'H' ? 'High' : 'Low'}</strong> at <strong>{tide.t.slice(11, 16)}</strong></span>
        </div>
      )}
      {wave && (
        <div style={{marginBottom: 8}}>
          <span>Wave Height: <strong>{wave.height_m} m</strong> / <strong>{wave.height_ft} ft</strong> (NOAA Buoy {wave.station})</span>
        </div>
      )}
      {/* Surf/boating summary */}
      {wave && wind && (
        <SurfSummary waveFt={parseFloat(wave.height_ft)} windKmh={wind.speed ? parseFloat(wind.speed) : null} />
      )}
      {visibility !== null && (
        <div style={{marginBottom: 8}}>
          <span>Visibility: <strong>{(visibility / 1000).toFixed(1)} km</strong></span>
        </div>
      )}
      {sun.sunrise && sun.sunset && (
        <div style={{marginBottom: 8}}>
          <span>Sunrise: <strong>{formatTimeLocal(sun.sunrise)}</strong> &nbsp;|&nbsp; Sunset: <strong>{formatTimeLocal(sun.sunset)}</strong></span>
        </div>
      )}
      {waterTemp && (
        <div style={{marginBottom: 8}}>
          <span>Water Temp: <strong>{waterTemp}</strong></span>
        </div>
      )}
      {waveTrend.length > 0 && (
        <div style={{marginBottom: 8, fontSize: '0.95em'}}>
          <div style={{fontWeight: 600}}>Next 6h Surf Forecast:</div>
          <SurfTrendChart trend={waveTrend} />
        </div>
      )}
      <div style={{marginTop: 8, fontSize: '0.85em'}}>
        <a href="https://www.weather.gov/" target="_blank" rel="noopener noreferrer">NWS</a>, <a href="https://tidesandcurrents.noaa.gov/" target="_blank" rel="noopener noreferrer">NOAA Tides</a>, <a href="https://www.ndbc.noaa.gov/station_page.php?station=44065" target="_blank" rel="noopener noreferrer">NOAA Buoy 44065</a> (open data, no API key)
      </div>
    </div>
  );
};

// Surf summary helper component
function SurfSummary({ waveFt, windKmh }) {
  let surfText = '—';
  let color = '#888';
  let advice = '';
  if (isNaN(waveFt)) {
    surfText = 'No surf data';
  } else if (waveFt < 1) {
    surfText = 'Flat / Poor';
    color = '#bdbdbd';
    advice = 'Not much surf today.';
  } else if (waveFt < 2.5) {
    surfText = 'Fun / Good';
    color = '#4caf50';
    advice = 'Great for beginners, SUP, or family fun!';
  } else if (waveFt < 4) {
    surfText = 'Solid / Very Good';
    color = '#2196f3';
    advice = 'Good surf for intermediate/advanced riders.';
  } else {
    surfText = 'Caution / Expert Only';
    color = '#e53935';
    advice = 'Big surf—use caution or watch from the beach!';
  }
  let windText = '';
  if (windKmh !== null) {
    if (windKmh < 15) {
      windText = 'Clean conditions';
    } else if (windKmh < 25) {
      windText = 'Some chop';
    } else {
      windText = 'Very choppy';
    }
  }
  return (
    <div style={{marginBottom: 8, padding: 8, borderRadius: 8, background: color + '22', color, fontWeight: 600}}>
      Surf/Marine: {surfText} {windText && `| ${windText}`}<br/>
      <span style={{fontWeight: 400, color: '#222'}}>{advice}</span>
    </div>
  );
}

function SurfTrendChart({ trend }) {
  // Use emoji or ASCII bar for trend
  return (
    <div style={{display: 'flex', gap: 4}}>
      {trend.map((pt, i) => {
        let h = parseFloat(pt.wvht);
        let bar = '▫️';
        if (isNaN(h) || pt.wvht === 'MM') bar = '▫️';
        else if (h < 1) bar = '▁';
        else if (h < 2) bar = '▂';
        else if (h < 3) bar = '▃';
        else if (h < 4) bar = '▄';
        else bar = '█';
        return <span key={i} title={pt.hour + ':00'} style={{fontSize: '1.25em'}}>{bar}</span>;
      })}
      <span style={{marginLeft: 8, color: '#666', fontSize: '0.9em'}}>now → +6h</span>
    </div>
  );
}

function formatTimeLocal(isoString) {
  // Format ISO string to local time (hh:mm AM/PM)
  const d = new Date(isoString);
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

export default WeatherWidget;
