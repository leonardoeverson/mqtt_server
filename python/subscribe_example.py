import json
import paho.mqtt.client as mqtt
import random
import time
import threading
import sys

def on_subscribe(mqttc, obj, mid, granted_qos):
    print("Subscribed: "+str(mid)+" "+str(granted_qos))
    
def pub():
    mqttc.subscribe("sensor/temp")

mqttc = mqtt.Client("leonardo_pinheiro", clean_session=True, userdata=None, transport="tcp")
mqttc.username_pw_set("leonardo@batista.g12.br", "12345678")
mqttc.connect("localhost", 1883, 60)
mqttc.on_subscribe = on_subscribe


pub()
