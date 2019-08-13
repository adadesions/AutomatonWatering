import firebase_admin
import google.cloud
from firebase_admin import credentials, firestore
from datetime import datetime

cred = credentials.Certificate(".automaton-adminsdk.json")
firebase_admin.initialize_app(cred)

store = firestore.client()
doc_ref = store.collection(u'science')

try:
    docs = doc_ref.stream()
    for raw in docs:
        data = raw.to_dict()
        saved_time = datetime.fromtimestamp(data['timestamp'])
        print('Temp: {:.2f}, Humi: {:.1f}, SavedTime: {}'.format(
            data['temperature'],
            data['humidity'],
            saved_time
        ))
except google.cloud.exceptions.NotFound:
    print('No Data')
