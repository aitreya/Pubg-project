from pymongo import MongoClient


class Connection:
    def __init__(self):
        client = MongoClient("mongodb://localhost:27017/")
        self.mydatabase = client.Custom

    def getData(self, collection, search={}):
        coll = self.mydatabase[collection]
        cursor = coll.find(search)
        data = [i for i in cursor]
        return data

    def addData(self, collection, data):
        coll = self.mydatabase[collection]
        cursor = coll.insert(data)
        return cursor

    def updateData(self, collection, search={}):
        pass

    def deleteData(self, collection, search={}):
        pass


if __name__ == '__main__':
    rec = {
        'title': 'MongoDB and Python',
        'description': 'MongoDB is no SQL database',
        'tags': ['mongodb', 'database', 'NoSQL'],
        'viewers': 104
    }
    db = Connection()
    data1 = db.addData("users", rec)
    print(data1)
