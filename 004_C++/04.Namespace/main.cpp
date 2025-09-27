#include<iostream>

namespace first{
    int x =1;
}
namespace second
{
    int x =2;
} // namespace second


// int main(){

//     using namespace  first;
//     std::cout << first::x << '\n' << second::x << '\n' <<x;
//     return 0;
// }

int main(){
    using std::cout;
    using std::string;

    string name = "Hritik";

    cout <<"Hello " << name;
    return 0;
}