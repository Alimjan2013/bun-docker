import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === '/'){
            console.log("Received request at /");
            return new Response(JSON.stringify({"Status": "OK-new"}), {
                headers: {'content-type': 'application/json'}
            });
        } else {
            console.log(`Received request at ${url.pathname}`);
            return new Response('Not found', {status: 404});
        }
        
    },
    port: 3000,
})

console.log (`Server is running.`);