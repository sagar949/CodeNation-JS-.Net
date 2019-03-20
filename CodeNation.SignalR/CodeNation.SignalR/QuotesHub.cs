using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace CodeNation.SignalR
{
    public class QuotesHub : Hub
    {
        private static HttpClient _client = new HttpClient();

        public void GetRandomQuote()
        {
            var response = _client.GetStringAsync(@"http://quotes.stormconsultancy.co.uk/random.json").Result;
            Clients.All.SendAsync("GetRandomQuote", response);
        }


    }
}
