using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using SampleApp.Services;
using SampleApp.Models;

namespace SampleApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController
    {
        private readonly UserService userService;

        public UserController(UserService us)
        {
            userService = us;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetUsers()
        {
            // Get users from service API call
            var users = await userService.GetUsers();
            return users;
        }

        [HttpGet("{u_id:int}/albums")]
        public async Task<IEnumerable<Album>> GetAlbums(int u_id)
        {
            // Get albums for user from service API call
            var albums = await userService.GetAlbums(u_id);
            return albums;
        }

        [HttpGet("{u_id:int}/albums/{a_id:int}/photos")]
        public async Task<IEnumerable<Photo>> GetPhotos(int u_id, int a_id)
        {
            // Get photos in user's album from service API call
            var photos = await userService.GetPhotos(a_id);
            return photos;
        }
    }
}
