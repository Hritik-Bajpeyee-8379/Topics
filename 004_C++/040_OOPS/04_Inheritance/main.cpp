// #include <iostream>

// class Animal{
//     public:
//         bool alive = true;
    
//     void eat(){
//         std::cout<<"This Animal is Eating";
//     }        
// };

// class Dog :public Animal{
//     public:

//     void bark (){

//         std::cout<<"The Dog is Barking";
//     }


// };
// int main (){

//     Dog dog;
//     std::cout <<dog.alive<<'\n';
//     dog.eat();
//     dog.bark();


//     return 0;
// }




#include<iostream>
using namespace std;

class Animal {
public:
    virtual void sound() { cout << "Animal sound"; }
};
class Dog : public Animal {
public:
    void no() { cout << "Bark"; }
};



int main(){
    Dog dog;

    dog.sound();

    return 0;
}