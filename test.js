var  data = [{
	"emotionId": 19,
	"emotionName": "默认",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559117021549-neutral-face_1f610.png",
	"textureList": [{
		"id": 1,
		"type": 1,
		"fileUrl": "https://chat-1252317822.image.myqcloud.com/boss/1559718455115-artboard_2x.png"
	}]
}, {
	"emotionId": 8,
	"emotionName": "微笑",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106135840-smiling-face-with-open-mouth-and-smiling-eyes_1f604.png",
	"textureList": []
}, {
	"emotionId": 12,
	"emotionName": "生气",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106442500-angry-face_1f620.png",
	"textureList": []
}, {
	"emotionId": 11,
	"emotionName": "悲伤",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106381722-crying-face_1f622.png",
	"textureList": []
}, {
	"emotionId": 16,
	"emotionName": "汗颜",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106818146-face-with-cold-sweat_1f613.png",
	"textureList": []
}, {
	"emotionId": 13,
	"emotionName": "惊讶",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106570404-astonished-face_1f632.png",
	"textureList": []
}, {
	"emotionId": 14,
	"emotionName": "脸红",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106625948-flushed-face_1f633.png",
	"textureList": []
}, {
	"emotionId": 10,
	"emotionName": "担心",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106316110-pensive-face_1f614.png",
	"textureList": []
}, {
	"emotionId": 9,
	"emotionName": "嫌弃",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559106238952-confused-face_1f615.png",
	"textureList": []
}, {
	"emotionId": 20,
	"emotionName": "害怕",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559611919668-face-with-open-mouth-and-cold-sweat_1f630.png",
	"textureList": []
}, {
	"emotionId": 15,
	"emotionName": "痛苦",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559642240028-tired-face_1f62b.png",
	"textureList": []
}, {
	"emotionId": 21,
	"emotionName": "黑化",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559642307450-smiling-face-with-horns_1f608 下午2.36.09.png",
	"textureList": []
}, {
	"emotionId": 22,
	"emotionName": "惊怒",
	"emotionImage": "https://chat-1252317822.image.myqcloud.com/boss/1559642384995-imp_1f47f.png",
	"textureList": []
}]


var parseData = function (arr) {
    arr.forEach(item => {
        var res ={};
        item.textureList && item.textureList.forEach(sub=>{
            if (res[sub.type] === undefined){
                res[sub.type] = [];
            } 
            res[sub.type].push(sub);
        })
        item.textureList = res ;
        
    });
    return arr;
}

console.log(parseData(data));