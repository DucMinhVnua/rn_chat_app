import database from '@react-native-firebase/database';


function BaseRealtimeDB(this: any) {

    // read onely one.
    this.oneTimeRead = async function (endPoint: any) {
        return await database()
            .ref(endPoint)
            .once('value')
            .then(snapshot => {
                return snapshot.val()
            });
    };

    // read any change data.
    this.realtimeChange = async function (endPoint: any) {
        return await database()
            .ref(endPoint)
            .once('value')
            .then(snapshot => {
                return snapshot.val()
            });
    };

    this.settingData = async function (endPoint: any, body: any) {
        await database()
            .ref(endPoint)
            .push()
            .set(body)
            .then(() => console.log('Data set.'));
    };

    this.updatingData = async function (endPoint: any, body: any) {
        await database()
            .ref(endPoint)
            .update(body)
            .then(() => console.log('Data updated.'));
    };

    this.removingData = async function (endPoint: any) {
        await database()
            .ref(endPoint)
            .remove()
            .then(() => console.log('Data removed.'));
    };
}

export default BaseRealtimeDB;
