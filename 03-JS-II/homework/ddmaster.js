function matriz(f, c) 
{

	for(var i=0; i<f; i++) 
	{

		for(var j=0; j<c; j++) 
		{
			// aca se queda hasta que j termine de ser menor que c y ahi sale.
			console.log(i + ',' + j);

		}
			// en el for no hace falta xq lo hace todo en la declaración, pone en 0 la variable y le suma 1.
	}

}
matriz(2,2);


function ejwhile(n,m) 
{
	var i=0;
	var j=0;
	while (i<n) 
	{
		while(j<m)
		{
			// cuando entra acá se queda acá hasta que 0 se convierte en 2 y sale.
			console.log(i + ',' + j);
			j++;
		}
		// debe volver a 0 para que vuelva a entrar y hacer el bucle completo.
		j=0;
		i++;
	}
}
ejwhile(2,2);


function esPrimo(n)
{
	// imprimir solo los nros primos, divisibles solo por 1 y por si mismos.
	if (n === 0)
	{
		return false;
	}
	if (n === 1)
	{
		return false;
	}

	for (var i=2; i<n; i++)
		{
			if (n % i === 0)
			{
				return false;
			} 
				
		}return true;

}
esPrimo(5);


function Primo(n)
{
	// imprimir solo los nros primos, divisibles solo por 1 y por si mismos.
	if (n === 0) {
		return false;
	}
	if (n === 1) {
		return false;
	}
	if (n === 2){
		return true;
	}

	for (var i=2; i<n; i++) {
		if (n % i === 0) {
			return false;
		} 
	}
	return true;
}
esPrimo(15);
