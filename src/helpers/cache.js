import redis from 'async-redis';


const client = redis.createClient(6379);

const expirationTime = 300; //second
const movieKeyFormat = 'movie.id=';


class CacheHelper {
    static async setCache(key,data){
        return await   client.setex(key,expirationTime, data);
    }
    static async getCache(key){
        console.log(key)
        var data = await client.get(key)
        // console.log(JSON.stringify({data}))
        return JSON.parse(data);
    }
    
}
export default CacheHelper;