import database from '@react-native-firebase/database';

function BaseRealtimeDB(this: any) {
   // read only one.
   this.oneTimeRead = async function (endPoint: any) {
      return await database()
         .ref(endPoint)
         .once('value')
         .then(snapshot => {
            return snapshot.val();
         })
         .catch(e => console.log(e));
   };

   // read any change data.
   this.realtimeChange = async function (endPoint: any) {
      return await database()
         .ref(endPoint)
         .once('value')
         .then(snapshot => {
            return snapshot.val();
         })
         .catch(e => console.log(e));
   };

   this.settingData = async function (endPoint: any, body: any) {
      await database()
         .ref(endPoint)
         .push()
         .set(body)
         .then(() => console.log('Data set.'))
         .catch(e => console.log(e));
   };

   this.updatingData = async function (endPoint: any, body: any) {
      await database()
         .ref(endPoint)
         .update(body)
         .then(() => console.log('Data updated.'))
         .catch(e => console.log(e));
   };

   this.removingData = async function (endPoint: any) {
      await database()
         .ref(endPoint)
         .remove()
         .then(() => console.log('Data removed.'))
         .catch(e => console.log(e));
   };
}

export default BaseRealtimeDB;
