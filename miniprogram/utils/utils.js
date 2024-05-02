export default {
    /**
     * 
     * @param {*} title 提示信息
     */
    toast(title='提示'){
        wx.showToast({
            title,
            icon: 'none',
            mask: true,
        })
    }
}