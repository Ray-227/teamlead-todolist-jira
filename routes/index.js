export default function routes(app) {
    app.get('/', (req, res) => {
        res.redirect('/atlassian-connect.json')
    });
    app.get('/teamlead-todo', (req, res) => {
        res.render('teamlead-todoList.jsx', {
            title: 'Teamlead TodoList',
            browserOnly: true
        })
    });
}
