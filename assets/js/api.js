
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/Roney-Bernardes-Dev/ProjetoPortfolio/main/projeto_Dio/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
