import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  state: {
    user: null
  },
  getters: {
    user: state => {
      return state.user;
    }
  },
  mutations: {
    updateUser(state, payload) {
      state.user = payload;
    }
  },
  actions: {
    updateUser({commit}, payload) {
      commit('updateUser', payload);
    },
    createUser(state, payload){
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => console.log(`user: ${user.email} successfully created`))
        .catch(error => console.error(error.code));
    },
    authUser(state, payload){
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => console.log(`user: ${user.email} successfully authorized`))
        .catch(error => console.error(error.code));
    },
    logOutUser(){
      firebase.auth().signOut()
        .then(() => console.log('user successfully logout'))
        .catch(error => console.error(error.code));
    }
  },
}
