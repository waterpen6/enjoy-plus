Page({
    data: {
        list:[]
    },
    async onLoad() {
        const data = await wx.http.get('/announcement')
        this.setData({
            list: data.data
        })
        
    }
})
