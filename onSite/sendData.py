import firebase_admin
import google.cloud
from random import randint
from firebase_admin import credentials, firestore
from datetime import datetime


def genSaveData(doc_ref, num):
    store = {}
    for i in range(num):
        temp = randint(20, 40)
        humi = randint(30, 40)
        timestamp = datetime.timestamp(datetime.now())

        data = {
            u'temperature': temp,
            u'humidity': humi,
            u'timestamp': timestamp
        }
        store[str(i)] = data
        print('key:{}, obj:{}'.format(i, data))

    doc_ref.set(store, merge=True)


if __name__ == '__main__':
    cred = credentials.Certificate(".automaton-adminsdk.json")
    firebase_admin.initialize_app(cred)

    store = firestore.client()
    doc_ref = store.collection(u'science').document(u'watering')
    genSaveData(doc_ref, 1)
