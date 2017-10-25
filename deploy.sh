docker rm -f $WA_UNITTESTING_APP_NAME
docker build -t $WA_UNITTESTING_APP_NAME:latest -t $WA_UNITTESTING_APP_NAME:$WA_UNITTESTING_APP_VERSION .
docker run -d --restart=always \-p $WA_UNITTESTING_EXP_PORT:$WA_UNITTESTING_PORT --name $WA_UNITTESTING_APP_NAME $WA_UNITTESTING_APP_NAME:$WA_UNITTESTING_APP_VERSION