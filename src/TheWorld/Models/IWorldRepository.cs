using System.Collections.Generic;
using System.Threading.Tasks;

namespace TheWorld.Models
{
    public interface IWorldRepository
    {
        IEnumerable<Trip> GetAllTrips();
        Trip GetTripByName(string tripName);
        IEnumerable<Trip> GetTripsByUsername(string username);
        Trip GetUserTripByName(string tripName, string name);

        void AddTrip(Trip trip);
        void AddStop(string tripName, Stop newStop, string username);

        Task<bool> SaveChangesAsync();
        
    }
}