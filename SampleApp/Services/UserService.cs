using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;
using SampleApp.Models;

namespace SampleApp.Services
{
    public class UserService
    {
        private readonly IHttpClientFactory _clientFactory;
        private HttpClient http;

        public UserService(IHttpClientFactory clientFactory)
        {
            _clientFactory = clientFactory;

            http = _clientFactory.CreateClient();
            http.BaseAddress = new Uri("https://jsonplaceholder.typicode.com");
        }

        public async Task<IEnumerable<User>> GetUsers()
        {
            var users = new List<User>();

            var request = new HttpRequestMessage(HttpMethod.Get, "users");
            var response = await http.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                using var responseStream = await response.Content.ReadAsStreamAsync();

                var options = new JsonSerializerOptions
                {
                    PropertyNamingPolicy = JsonNamingPolicy.CamelCase,
                };
                users = await JsonSerializer.DeserializeAsync
                    <List<User>>(responseStream, options);
            }

            return users;
        }


        // Get albums of user (w/ id = u_id) from JSONplaceholder API
        public async Task<IEnumerable<Album>> GetAlbums(int u_id)
        {
            var albums = new List<Album>();
            var req = new HttpRequestMessage(HttpMethod.Get,
                $"users/{u_id}/albums");
            var res = await http.SendAsync(req);

            if (res.IsSuccessStatusCode)
            {
                var stream = await res.Content.ReadAsStreamAsync();
                albums = await JsonSerializer
                    .DeserializeAsync<List<Album>>(stream);
            }

            return albums;
        }

        // Get photos in album (w/ id = a_id) from JSONplaceholder API
        public async Task<IEnumerable<Photo>> GetPhotos(int a_id)
        {
            var photos = new List<Photo>();
            var req = new HttpRequestMessage(HttpMethod.Get,
                $"albums/{a_id}/photos");
            var res = await http.SendAsync(req);

            if (res.IsSuccessStatusCode)
            {
                var stream = await res.Content.ReadAsStreamAsync();
                photos = await JsonSerializer
                    .DeserializeAsync<List<Photo>>(stream);
            }

            return photos;
        }
    }
}