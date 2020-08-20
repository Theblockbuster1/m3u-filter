# m3u Filter

Can be used to filter out certain categories from IPTV playlists.

Edit the regex on line 18 to change the filter. Currently it filters out channels in the category 'XXX'.

# How to use

0. Make sure you have Node.js installed.
1. Download or clone the repo.
2. Run `npm i` to install the required packages.
3. Run `npm start` to start hosting the filter to port `1337`.

Before: `https://iptv-org.github.io/iptv/countries/us.m3u`

After: `http://127.0.0.1:1337/filter/https://iptv-org.github.io/iptv/countries/us.m3u`
