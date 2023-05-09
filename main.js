$('#form-tarefas').on('submit', function(e) {
    e.preventDefault();
    const novaTarefa = $('#nome-tarefa').val();
    const novoItem =$('<li></li>');
    novoItem.text(novaTarefa);
    novoItem.appendTo('#lista-tarefas');
});

$('#lista-tarefas').on('click', 'li', function(){
    $(this).toggleClass('riscar-frase');
});