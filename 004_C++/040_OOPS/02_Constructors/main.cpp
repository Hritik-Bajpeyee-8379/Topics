#include<iostream>


class Students{

    public:
        std::string name;
        int age;
        double gpa;
    Students(std::string name, int age, double gpa){
        
        this->name = name;
        this->age = age;
        this->gpa = gpa;

    }
    //DO IN THIS WAY ALSO
    // Students(std::string x, int y, double z){
        
    //     name = x;
    //     age = y;
    //     gpa = z;

    // }

};

int main (){

    Students student1("Hritik",23,4.2);
    Students student2("Pankaj",25,5.2);

    std::cout<< student1.name<<std::endl;
    std::cout<< student1.age<<std::endl;
    std::cout<< student1.gpa<<std::endl;

    std::cout<<"\n";

    std::cout<< student2.name<<std::endl;
    std::cout<< student2.age<<std::endl;
    std::cout<< student2.gpa<<std::endl;

    return 0;
}