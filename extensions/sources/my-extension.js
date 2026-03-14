import AbstractSource from './abstract.js'

export default new class MySource extends AbstractSource {
  // Your server's URL
  url = 'https://your-personal-server.com'

  // 1. Check if your server is reachable
  async validate() {
    return (await fetch(this.url))?.ok
  }

  // 2. Fetch a single episode
  async single(options) {
    // Logic to search your server for a single episode
    // Must return an array of Results
    return []; 
  }

  // 3. Fetch a full season/batch
  async batch(options) {
    // Logic to search for a full batch
    return [];
  }

  // 4. Fetch a movie
  async movie(options) {
    // Logic to search for a movie. 
    // If your source can't tell the difference between movies and episodes, return [] and just use single()
    return [];
  }
}()
