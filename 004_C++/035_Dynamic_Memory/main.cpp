#include <iostream>
using namespace std;

int main (){

    // int *pNum = NULL;

    // pNum = new int;

    // *pNum = 22;

    // std:: cout<<pNum <<std::endl;
    // std:: cout<<*pNum<< std:: endl;

    // delete pNum;



    char *pGrade = NULL;
    int size;

    cout << "hHow Many: ";
    cin >> size;
    pGrade = new char [5];

    for (int i = 0; i < size; i++)
    {
        cout<<"Enter: " << i+1 <<": ";
        cin >> pGrade[i];

    }
    
    for (int  i = 0; i < size; i++)
    {
        cout << pGrade[i] <<" ";
    }
    
    delete[] pGrade;

    return 0;
}