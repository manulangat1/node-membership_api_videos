import { Video} from '../../database/models';
import responseHandler from '../../helpers/responseHandler';
import errorHandler from  '../../helpers/errorHandler'
import  CacheHelper from "../../helpers/cache";

class videoController {
    static async getMovies(req,res){
        try{
            const videos = await Video.findAll();
            const data = await CacheHelper.getCache('all')
            if (data != null){
                return responseHandler(res,"Videos loaded successfully",200,data)
            } else {
                await CacheHelper.setCache('all', data);
                // return res.json(data);
                return responseHandler(res,"Videos loaded successfully",200,videos);
            }
            return responseHandler(res,"Videos loaded successfully",200,videos);
        } catch (error){
            console.log(error)
            errorHandler.handleError(error.message,500,res)
        }
    }
}
export default videoController;