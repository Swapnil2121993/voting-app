const initialState={
  react:0,
  angular:0,
  vue:0,
};

export default function(state=initialState, action){
    switch(action.type){
      case'VOTE_REACT':
      return Object.assign({},state,{react:state.react+1})

      case 'VOTE_ANGULAR':
      return Object.assign({},state,{angular:state.angular+1})

      case 'VOTE_VUE':
      return Object.assign({},state,{vue:state.vue+1})

      default:
      return state;
  }
}
