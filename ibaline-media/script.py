import aprslib as aprs
from time import sleep

def callback(packet):
    return packet

print("Now attempting to connect to APRS server... please wait.")

aprs_node = aprs.IS("0", port=14580)
aprs_node.set_filter("p/KF")
aprs_node.connect()

while True:
    print(aprs_node.consumer(callback))
    # Sleeping for one second to preven infinite polling.
    sleep(2)
    print("Looking for next packet... please wait.")
