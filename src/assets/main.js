const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCO-E7oKhVuqJzwn33ZnrWfQ&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c029dc5a0cmshdb78001ce9703c1p13a51ejsn0063edebf99e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlAPI){
    const response = await fetch(urlAPI,options);
    const data = await response.json();
    return data;
}

(async () =>{
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video=>`
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0,4).join('')}
        `;
        content.innerHTML = view;
        console.log("-");
    }catch(error){
        console.log(error);

    }

})();