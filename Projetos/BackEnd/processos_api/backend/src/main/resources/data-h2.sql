INSERT INTO assunto (descricao, dtcadastro) VALUES
	('Autorização para Corte de Árvores - Área Pública', '2021-05-23'),
	('Autorização para Utilização de Espaço Público', '2021-05-23'),
	('Alteração de dados cadastrais da Inscrição Municipal de Pessoa Física/Pessoa Jurídica', '2021-05-23'),
	('Certidao de Zoneamento (Uso e Ocupação de solo)', '2021-05-23'),
	('Compensação de Auto de Infração/Notificação', '2021-05-23'),
	('Consulta de Viabilidade para Instalação', '2021-05-23'),
	('Consulta de Viabilidade para Instalação Automatizada', '2021-05-23'),
	('Devolução/Restituição de Auto de Infração/Notificação', '2021-05-23'),
	('Devolução/Restituição de Parcelamento', '2021-05-23'),
	('Edital de Temporada de Verão 2021/2021', '2021-05-23'),
	('Devolução/Restituição de Parcelamento', '2021-05-23'),
	('Devolução/Restituição de Tributos Imobiliários', '2021-05-23'),
	('Devolução/Restituição de Tributos Mobiliários', '2021-05-23'),
	('Renovação da Autorização Ambiental Diversa', '2021-05-23'),
	('Gratificação de Incentivo', '2021-05-23');
	
INSERT INTO interessado(id, nminteressado, nuidentificacao, dtnascimento, flativo) VALUES
	( '1', 'Jeff Bezos', '12422236065', '2000-01-01', 'S'),
	( '2', 'Elon Musk', '95264513090', '2000-01-01', 'S');
	
INSERT INTO processo(id, nuprocesso, sgorgaosetor, nuano, chaveprocesso, descricao, assunto_id, interessado_id) VALUES
	( '1', '1', 'SOFT', '2021', 'SOFT 1/2021', 'Corte de arvores para fabricar nave espacial', '1', '1'),
	( '2', '2', 'SOFT', '2021', 'SOFT 2/2021', 'Licenca para construcao de base de lancamento de foguetes', '14', '2');