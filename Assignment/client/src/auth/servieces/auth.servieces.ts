class AuthService {
    static $inject = ['$http'];
    private apiUrl: string = 'https://fakestoreapi.com/users';

    constructor(private $http: ng.IHttpService) {
        
    }
    
    getUsers(){
        return this.$http.get(this.apiUrl)
            .then(response => response.data)
            .catch(error => {
                console.error('Get users error:', error);
                throw error;
            });
    }
    getUser(id: number){
        return this.$http.get(`${this.apiUrl}/${id}`)
            .then(response => response.data)
            .catch(error => {
                console.error('Get user error:', error);
                throw error;
            });
    }
    
}

export {AuthService};
