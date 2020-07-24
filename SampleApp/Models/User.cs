using System;
namespace SampleApp.Models
{
    public class User
    {
        public int id { get; set; }
        public String name { get; set; }
        public String username { get; set; }
        public String email { get; set; }
        public String phone { get; set; }
        public String website { get; set; }

        public Address address { get; set; }
        public Company company { get; set; }
    }

    public class Address
    {
        public String street { get; set; }
        public String suite { get; set; }
        public String city { get; set; }
        public String zipcode { get; set; }
        public Geo geo { get; set; }
    }

    public class Geo
    {
        public String lat { get; set; }
        public String lng { get; set; }
    }

    public class Company
    {
        public String name { get; set; }
        public String catchPhrase { get; set; }
        public String bs { get; set; }
    }
}
