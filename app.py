//const alpha_vantage = require ('alpha_vantage')
from alpha_vantage.timeseries import TimeSeries
ts = TimeSeries(key='YT0QE9BTH41GUH7E',retries='5')

data, meta_data = ts.get_intraday('FB')