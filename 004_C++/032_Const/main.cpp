#include <iostream>


void PrintInfo(const std::string name , const int age){

    std :: cout << name << '\n' << age << '\n';

}
int main (){

    std :: string name= "Hritik";
    int age = 21;
    PrintInfo(name,age);


    return 0;
}