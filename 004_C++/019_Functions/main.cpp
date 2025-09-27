#include <iostream>

void greeting (std::string name){
    using namespace std;
    for (int i = 1; i <=3; i++)
    {
        cout << "hello" << name << endl;
    }
    
}

int main (){
    std:: string name = " World";

    greeting(name);

    return 0;
}