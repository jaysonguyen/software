using System;
using System.Collections.Generic;
using System.Text;

namespace ConsoleApp1
{
    class staff: Person
    {
        private string school;
        private double pay;

        public staff(string name, string address, string school, double pay):base(name,address)
        {
            this.school = school;
            this.pay = pay;
        }
        public string getshchool()
        {
            return school;
        }
        public void setschool()
        {
            this.school = school;
        }
        public double getpay()
        {
            return pay;
        }
        public void setpay()
        {

            this.pay = pay;
        }
        public override string tostring()
        {
            return $"Staff[" + base.tostring() + $"school= {school}, pay= {pay}";
        }
    }
}
