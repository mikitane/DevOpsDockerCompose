# Explanation of the addresses and ports in the response

Example response:
```
Hello from ::ffff:172.21.0.1:49172
to ::ffff:172.21.0.2:3000
Hello from ::ffff:172.21.0.2:38538
to ::ffff:172.21.0.3:3000
```

All IPV4 addresses are prefixed with `::ffff:` to make them IPV6-compliant.

## 1. row
`172.21.0.1` is the IP address of the Gateway to the `randomnet`. \
All requests from outside are routed through this address. \
`49172` is the port which the request is sent from. \

## 2. row
`172.21.0.2` is the IP address of the Service 1 in `randomnet` \
`3000` is the port that Service 1 is listening.

## 3. row
`172.21.0.2` is the IP address of the Service 1 in `randomnet` \
`38538` is the port that Service 1 is using to make the request to Service 2.

## 4. row
`172.21.0.3` is the IP address of the Service 2 in `randomnet` \
`3000` is the port that Service 2 is listening.
