function solution(arr){
    let result = []
    for (const commands of arr) {
        
        let [token, str] = commands.split(' ')

        switch (token) {
            case 'add':
                add(str,result)
                break;
            case 'remove':
                remove(str, result)
            case 'print':
                print(result)
            default:
                break;
        }

        function add(str,result){
            return result.push(str)
        }
        function remove(str, result){
            return result.splice(result.indexOf(str), 1)
        }
        function print(result){
            return result.join(',')
        }
    }
}
solution(['add hello', 'add again', 'remove hello', 'add again', 'print'] )