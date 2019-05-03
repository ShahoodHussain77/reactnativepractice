const api = 'https://bakesaleforgood.com'

export default {
    async getInitialDeals(){
        try{
            const response = await fetch(api + '/api/deals');
            const responseJson = await response.json();
            return responseJson;
        }catch(error){
            console.error(error);
        }
    },
    async fetchDealData(dealId){
        try{
            let response = await fetch(api + '/api/deals/' + dealId);
            let responseJson = await response.json();
            return  responseJson;
        }catch(error){
            console.error(error);
        }
    },
    async fetchSearchDeal(searchTerm){
        try{
            let response = await fetch(api + '/api/deals?searchTerm=' + searchTerm);
            let responseJson = await response.json();
            return  responseJson;
        }catch(error){
            console.error(error);
        }
    },
}