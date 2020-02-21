import jsonPlaceHolder from '../apis/jsonPlaceHolder'
import _ from 'lodash'

export const fetchPost_ = () => {
    return (dispatch, getStore) => {
        const response = jsonPlaceHolder.get('/posts')
        
        return dispatch({
            type: 'FETCH_POSTS',
            payload: response
        })
    }

}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPost())    
    _.uniq(getState().posts.map(post => post.userId)).forEach(id => dispatch(fetchUser(id)) )
}

export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')

    return dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)
    
    return dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
} 