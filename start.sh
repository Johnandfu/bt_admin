#! /bin/sh



cd public/vendor/webmsgsender && php start.php start -d
cd ../../../ && php artisan websocket:client start --mode=d