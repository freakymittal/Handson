export default function comments(state = [], action){
    if(typeof action.postId !== 'undefined'){
    	return{
    		...state,
    		[action.postId]: postComments(state[action.postId], action)
    	}	
    }
    return state;
}
function postComments(state = [], action){
	switch(action.type){
    	case 'ADD_COMMENT': {
    		return [
    			...state,{
    				user: action.author,
    				text: action.comment
    			}
    		];
    	}
    	case 'REMOVE_COMMENT': {

    	}
    	default:
    		return state;
    }
}
