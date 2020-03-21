# How to scale jitsi

In jitsi meet, the main bottleneck is the videobridge, so the question is how to add more videobridge.

And, for the videobridge, the limitaion is usually the bandwitdh. Count 2Mbit/s for each person sharing his webcam.

So to scale, there are 2 techniques:
 - adding more videobridge to the setup
 - adding more shards
 
## More videobridge

This is explained in this [video](https://www.youtube.com/watch?v=LyGV4uW8km8&list=PLDTllfT914sUyee7Ej3IYSqOPX_YQq1rx&index=2)

## More shards

This is explained in this [video](https://www.youtube.com/watch?v=Jj8a6ZRgehI&list=PLDTllfT914sUyee7Ej3IYSqOPX_YQq1rx&index=4)

### What is a shard

A shard is a complete jitsi installation (web, jicofo, prosody and n videobridge - n can also be just 1).

In this setup, to load balance, you need to put a reverse proxy in front, like nginx.

And load balance, based on the arg "room" from the url.

And voila!
