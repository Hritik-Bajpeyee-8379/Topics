#include<iostream>

int main(){

    std::string name;
    int age;

    std::cout << "What's Your Name?: ";
    // std::cin >> name;  , It cannot Enter name after space
    std::getline(std::cin >> std::ws ,name); // To get White spaces

    std::cout << "What's Your Age?: ";
    std::cin >> age;

    std::cout << "Hello " << name <<'\n';
    std::cout << "You're " << age <<" Year's Old";

    return 0;
}