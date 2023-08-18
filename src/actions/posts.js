import * as api from "../api"

export const getPosts = () =>
    async (dispatch) => {
        try {
            const { data } = await api.fetchPost();
            dispatch({ type: "FETCH_ALL", payload: data })
        } catch (error) {
            console.log(error)
        }
    }


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const updatePost = (_id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(_id, post);
        dispatch({ type: "UPDATE", payload: data })
    } catch (error) {
        console.log(error)
    }
}

export const deletePost = (_id) => async (dispatch) => {
    try {
        await api.deletePost(_id);
        dispatch({ type: "DELETE", payload: _id })
    } catch (error) {
        console.log("error")
    }
}


export const likePost = (_id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(_id);
        dispatch({ type: "LIKE", payload: data })
    } catch (error) {
        console.log(error)
    }
}