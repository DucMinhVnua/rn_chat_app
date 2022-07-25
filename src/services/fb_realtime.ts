import database from '@react-native-firebase/database';


function BaseRealtimeDB(this: any, endPoint: any, body?: any) {
    this.endPoint = endPoint;
    this.body = body;

    // read onely one.
    this.oneTimeRead = async function () {
        return await database()
            .ref(this.endPoint)
            .once('value')
            .then(snapshot => {
                return snapshot.val()
            });
    };

    // read any change data.
    this.realtimeChange = async function () {
        return await database()
            .ref(this.endPoint)
            .once('value')
            .then(snapshot => {
                return snapshot.val()
            });
    };

    this.settingData = async function () {
        await database()
            .ref(this.endPoint)
            .push()
            .set(this.body)
            .then(() => console.log('Data set.'));
    };

    this.updatingData = async function () {
        await database()
            .ref('/users/123')
            .update({
                age: 32,
            })
            .then(() => console.log('Data updated.'));
    };

    this.removingData = async function () {
        await database()
            .ref('/users/123')
            .remove()
            .then(() => console.log('Data removed.'));
    };
}

export default BaseRealtimeDB;
