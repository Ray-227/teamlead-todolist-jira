const fetchTodoListQuery = ({ project = 'TTLIST', todoCount = 15 }) => (
  {
    expand: [
      "names",
      "schema",
      "operations"
    ],
    fields: [
      "summary",
      "status",
      "assignee"
    ],
    fieldsByKeys: false,
    jql: `project = ${project}`,
    maxResults: todoCount,
    startAt: 0
  }
)

const auth = {
  email: 'chainsaw-man@mail.ru',
  token: 'ATATT3xFfGF08OOrKw9vBwtVpUv2uwdp9WwwLypvitTzoarf8hQMX-l_LvZlXCFxYlFouP--f4P-XVWEDDx4bDUKJVVcreXatCWiMZ2vJU3PiVdK1xCUsqT5JiM9XQlUdOHs0RnqoQWXFT_NfzJcD0CxHU6oXE11K_CzZGwkDBnFsscMCHDCg6Q=22298E4C',
}

export const fetchTodoListRequest = async payload => (
  fetch('https://teamleadtest.atlassian.net/rest/api/3/search', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${Buffer.from(
        `${auth.email}:${auth.token}`
      ).toString('base64')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(fetchTodoListQuery(payload))
  })
    .then(response => {
      console.log(
        `Response: ${response.status} ${response.statusText}`
      );
      return response.text();
    })
    .then(text => console.log(text))
    .catch(err => console.error(err))
)