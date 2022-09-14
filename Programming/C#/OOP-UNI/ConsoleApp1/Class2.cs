using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class Student : Person
    {
        private string program;
        private int year;
        private double fee;

        public Student(string name,string address, string program, int year, double fee):base(name,address)
        {
            this.program = program;
            this.year = year;
            this.fee = fee;
        }
        public string getprogram()
        {
            return program; 
        }
        public void setprogram(string program)
        {
            this.program = program;
        }
        public int getyear()
        {
             return year;
        }
        public void setyear(int year)
        {
            this.year = year;
        }
       
        public double getfee()
        {
             return fee; 
        }
        public void setfee(int fee)
        {
            this.fee = fee;
        }
        public override string tostring()
        {
            return "studen:" + base.tostring()  + " Program: " + program + " year: " + year + " fee: " + fee ;
        }


    }
}
