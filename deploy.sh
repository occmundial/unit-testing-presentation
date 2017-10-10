docker service rm $WA_UNITTESTING_APP_NAME
docker build -t $WA_UNITTESTING_APP_NAME:latest -t $WA_UNITTESTING_APP_NAME:$WA_UNITTESTING_APP_VERSION .
docker service create \
   --name $WA_UNITTESTING_APP_NAME \
   --replicas $WA_UNITTESTING_REPLICAS \
   --network $WA_UNITTESTING_NETWORK \
   -p $WA_UNITTESTING_EXP_PORT:$WA_UNITTESTING_PORT \
   $WA_UNITTESTING_APP_NAME:$WA_UNITTESTING_APP_VERSION